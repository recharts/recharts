import{r as f,R as e}from"./iframe-CxHJIaxn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CePtpgW3.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B4J4SBJt.js";import{C as k}from"./ComposedChart-ZJvCku8z.js";import{X as K}from"./XAxis-BtFfwAik.js";import{L as v}from"./Legend-DXxa1Zdn.js";import{B as a}from"./Bar-CZxejRCU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./Label-M_CthLgf.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cypa3mep.js";import"./throttle-zrHO1Lk3.js";import"./axisSelectors-DToVA1z_.js";import"./diverging-AJjDHMaN.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-lHGqaVDW.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D0XE9GLh.js";import"./uniqBy-Xde66OV6.js";import"./iteratee-BBskpsD7.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DnDN_vpi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-AwN8DkOy.js";import"./useAnimationId-D_Yg6oAr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHoE966L.js";import"./tooltipContext-9a1Rg7V8.js";import"./ErrorBarContext-BUUfXJQl.js";import"./activeStyles-BwCU-iTy.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./getZIndexFromUnknown-C257KuLs.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./omit-3IZhTV-p.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
