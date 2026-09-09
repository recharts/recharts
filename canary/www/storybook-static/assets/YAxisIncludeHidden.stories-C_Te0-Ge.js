import{r as f,R as e}from"./iframe-gpTdtb3o.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CLFsfV71.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B_W_5LRM.js";import{C as k}from"./ComposedChart-Cpu7A6lv.js";import{X as K}from"./XAxis-DYu-ZOyv.js";import{L as v}from"./Legend-BGa0h3W9.js";import{B as a}from"./Bar-DWzPLyu3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dvu_EEFs.js";import"./Text-ak0t_Bx4.js";import"./resolveDefaultProps-B1pv53Kz.js";import"./DOMUtils-Cn984pfG.js";import"./isWellBehavedNumber-Cw4jxBns.js";import"./useId-ByjeVVFt.js";import"./useBackwardsCompatibleTheme-DCuKeaT8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtPhgAmh.js";import"./index-Ca1MAT9x.js";import"./index-6dylaplf.js";import"./RechartsWrapper-D3qcdzr8.js";import"./axisSelectors-CvE00xSD.js";import"./throttle-hlhbAB_M.js";import"./d3-scale-7NDnVj98.js";import"./index-nUwe86SZ.js";import"./index-DXV1xdLh.js";import"./renderedTicksSlice-DaEdYejM.js";import"./index-BMezmC1E.js";import"./CartesianAxis-CIlmhzaL.js";import"./Layer-D_tVd9Wv.js";import"./types-DEtafNZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DPQqrhgz.js";import"./chartDataContext-BsKoSYgw.js";import"./CategoricalChart-f3aA9Jty.js";import"./Symbols-NpmPSUOW.js";import"./symbol-YRQzSnHu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHZkptX3.js";import"./uniqBy-DYlIInnP.js";import"./iteratee-CkkSmBRO.js";import"./AnimatedItems-CmtCKI6D.js";import"./useAnimationId-BJpAmfdR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKEK9pt1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjV0uxAo.js";import"./tooltipContext-Dap5BI69.js";import"./RegisterGraphicalItemId-D6ws7CHx.js";import"./ErrorBarContext-Cyjjr4ja.js";import"./GraphicalItemClipPath-BJM_h44F.js";import"./SetGraphicalItem-C_pU6L7b.js";import"./getZIndexFromUnknown-_PKLyUPN.js";import"./useGraphicalItemIdentity-DKbxUJti.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
