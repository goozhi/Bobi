class RandomPermutationGenerator {

    constructor(n, k, options = {}) {

        this.n = n;

        this.k = k;

        this.allowedStarts = options.allowedStarts || Array.from({ length: n }, (_, i) => i + 1);

        this.reverseSame = options.reverseSame !== undefined ? options.reverseSame : true;

        this.baseTriplets = options.baseTriplets || [];

        this.maxAttempts = options.maxAttempts || 10000;

        

        this.forbiddenSet = this._buildForbiddenSet();

        this.allNumbers = Array.from({ length: n }, (_, i) => i + 1);

    }

    

    // ========== 辅助方法 ==========

    

    _buildForbiddenTripletsFromBase(baseTriplet) {

        const [x, y, z] = baseTriplet;

        const allPermutations = [

            [x, y, z], [x, z, y],

            [y, x, z], [y, z, x],

            [z, x, y], [z, y, x]

        ];

        return allPermutations.filter(triple => triple[1] !== y);

    }

    

    _buildForbiddenSet() {

        const forbiddenSet = new Set();

        for (const base of this.baseTriplets) {

            const forbidden = this._buildForbiddenTripletsFromBase(base);

            for (const trip of forbidden) {

                forbiddenSet.add(trip.join(','));

            }

        }

        return forbiddenSet;

    }

    

    _hasForbiddenTriplet(perm) {

        for (let i = 0; i <= perm.length - 3; i++) {

            const triple = [perm[i], perm[i+1], perm[i+2]];

            const key = triple.join(',');

            if (this.forbiddenSet.has(key)) {

                return true;

            }

        }

        return false;

    }

    

    _toCanonicalForm(perm) {

        if (!this.reverseSame) return perm;

        const rev = [...perm].reverse();

        for (let i = 0; i < this.k; i++) {

            if (rev[i] < perm[i]) return rev;

            if (rev[i] > perm[i]) return perm;

        }

        return perm;

    }

    

    // ========== 简单版：生成所有排列再过滤 ==========

    

    enumerateAllSimple() {

        const results = [];

        const used = new Array(this.n + 1).fill(false);

        const allPerms = [];

        

        // 生成所有 k-排列

        const generateAll = (current) => {

            if (current.length === this.k) {

                allPerms.push([...current]);

                return;

            }

            for (let num = 1; num <= this.n; num++) {

                if (current.length === 0 && !this.allowedStarts.includes(num)) continue;

                if (!used[num]) {

                    used[num] = true;

                    current.push(num);

                    generateAll(current);

                    current.pop();

                    used[num] = false;

                }

            }

        };

        

        generateAll([]);

        

        // 过滤并去重

        const canonicalSet = new Set();

        for (const perm of allPerms) {

            const canonical = this._toCanonicalForm(perm);

            const key = canonical.join(',');

            if (!canonicalSet.has(key) && !this._hasForbiddenTriplet(canonical)) {

                canonicalSet.add(key);

                results.push(canonical);

            }

        }

        

        return results;

    }

    

    // ========== 高效版：回溯 + 剪枝 ==========

    

    enumerateAllEfficient() {

        const results = [];

        const used = new Array(this.n + 1).fill(false);

        const canonicalSet = new Set();

        

        // 检查部分排列的最后三个是否构成禁止三元组

        const hasPartialForbidden = (current) => {

            if (current.length < 3) return false;

            const triple = [current[current.length-3], current[current.length-2], current[current.length-1]];

            return this.forbiddenSet.has(triple.join(','));

        };

        

        const backtrack = (current) => {

            // 剪枝：当前部分排列已经包含禁止三元组

            if (hasPartialForbidden(current)) {

                return;

            }

            

            if (current.length === this.k) {

                const canonical = this._toCanonicalForm(current);

                const key = canonical.join(',');

                if (!canonicalSet.has(key)) {

                    canonicalSet.add(key);

                    results.push(canonical);

                }

                return;

            }

            

            // 按数字从小到大尝试（保证可重复性，也利于剪枝）

            for (let num = 1; num <= this.n; num++) {

                if (current.length === 0 && !this.allowedStarts.includes(num)) continue;

                if (!used[num]) {

                    used[num] = true;

                    current.push(num);

                    backtrack(current);

                    current.pop();

                    used[num] = false;

                }

            }

        };

        

        backtrack([]);

        return results;

    }

    

    // ========== 原有的随机生成方法 ==========

    

    _generateRandomPermutation() {

        const first = this.allowedStarts[Math.floor(Math.random() * this.allowedStarts.length)];

        const remaining = [];

        for (let i = 1; i <= this.n; i++) {

            if (i !== first) remaining.push(i);

        }

        for (let i = 0; i < this.k - 1; i++) {

            const randIndex = i + Math.floor(Math.random() * (remaining.length - i));

            [remaining[i], remaining[randIndex]] = [remaining[randIndex], remaining[i]];

        }

        const rest = remaining.slice(0, this.k - 1);

        return [first, ...rest];

    }

    

    generate() {

        for (let attempt = 0; attempt < this.maxAttempts; attempt++) {

            const perm = this._generateRandomPermutation();

            let candidate = perm;

            if (this.reverseSame) {

                const rev = [...perm].reverse();

                for (let i = 0; i < this.k; i++) {

                    if (rev[i] < perm[i]) { candidate = rev; break; }

                    if (rev[i] > perm[i]) break;

                }

            }

            if (!this._hasForbiddenTriplet(candidate)) {

                return candidate;

            }

        }

        return null;

    }

    

    generateMany(count) {

        const results = [];

        for (let i = 0; i < count; i++) {

            const result = this.generate();

            if (result) results.push(result);

        }

        return results;

    }

    

    isValid(perm) {

        if (perm.length !== this.k) return false;

        if (!this.allowedStarts.includes(perm[0])) return false;

        if (new Set(perm).size !== this.k) return false;

        for (const num of perm) {

            if (num < 1 || num > this.n) return false;

        }

        return !this._hasForbiddenTriplet(perm);

    }

}
/*
// 测试：n=9, k=4, 允许开头 [1,2,3], 反序视为同一种, 禁止 [1,3,2] 等

const gen = new RandomPermutationGenerator(9, 4, {

    allowedStarts: [1, 2, 3],

    reverseSame: true,

    baseTriplets: [[1, 2, 3]]

});

const allValid = gen.enumerateAllSimple();

console.log(`共找到 ${allValid.length} 个有效排列`);
const fs = require("fs")
fs.writeFileSync("test.magm.json", JSON.stringify(allValid, null, 2))
console.log(allValid.slice(0, 10));  // 打印前10个

*/
module.exports= RandomPermutationGenerator