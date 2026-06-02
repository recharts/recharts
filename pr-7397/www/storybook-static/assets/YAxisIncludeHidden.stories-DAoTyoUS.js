import{P as f,c as e}from"./iframe-DCxmmXwr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BdatH0tB.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-D5dh4jLY.js";import{C as k}from"./ComposedChart-CBS3HMO1.js";import{X as K}from"./XAxis-BjsM6oGC.js";import{L as v}from"./Legend-D_VZHv2d.js";import{B as s}from"./Bar-69ql2Qbe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BGMlQ-Gx.js";import"./CartesianAxis-Bc9Tdb6N.js";import"./Layer-BBh4PyoV.js";import"./resolveDefaultProps-Dbw1fq_o.js";import"./Text-BQlyDcDw.js";import"./DOMUtils-BtWg_eMC.js";import"./isWellBehavedNumber-CpP0Zk3Z.js";import"./Label-BxDF9pHP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYE1lO3r.js";import"./index-DDgPfSlI.js";import"./index-Mzvapta9.js";import"./types-gNnCO6KJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSZVgTAV.js";import"./immer-SgEFwxUu.js";import"./RechartsWrapper-BIau-2yw.js";import"./index-VwBqvb6i.js";import"./index-DgYh_LA8.js";import"./axisSelectors-dhV3Z94_.js";import"./d3-scale-Bu_zrpDn.js";import"./CartesianChart-D-fZCIkl.js";import"./chartDataContext-PHEEBUXD.js";import"./CategoricalChart-DfNs-HF3.js";import"./Symbols-DZ5_o2ZZ.js";import"./symbol-B72_j4nQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjjxYU9a.js";import"./uniqBy-Bvj1oplb.js";import"./iteratee-CNGuNOZ0.js";import"./tooltipContext-audjeD95.js";import"./ReactUtils-UlfCGyqA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJU7mBdh.js";import"./useAnimationId-D36I95JC.js";import"./ActiveShapeUtils-cF9iV1xd.js";import"./RegisterGraphicalItemId-Bf4FTeRp.js";import"./ErrorBarContext-VLRUzxSd.js";import"./GraphicalItemClipPath-BgB5Pb70.js";import"./SetGraphicalItem-CTm0YcCQ.js";import"./getZIndexFromUnknown-D83IOCDx.js";import"./graphicalItemSelectors-Byb2PPwp.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
