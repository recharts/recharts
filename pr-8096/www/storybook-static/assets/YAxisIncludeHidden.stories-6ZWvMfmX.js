import{r as f,R as e}from"./iframe-u5XvksY5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D_j8mX6u.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-qPjBbXUc.js";import{C as k}from"./ComposedChart-bB_CptVE.js";import{X as K}from"./XAxis-FOCUFVAl.js";import{L as v}from"./Legend-CF6hqVxX.js";import{B as a}from"./Bar-BHyHw6JB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-VbOnr0hr.js";import"./Text-DCsWNeTw.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D58IkYNc.js";import"./throttle-B8qtKcg2.js";import"./axisSelectors-Bi0OjrmZ.js";import"./d3-scale-C5Gzvvl7.js";import"./CartesianAxis-C9X2Uzsi.js";import"./Layer-DZaDPYK5.js";import"./types-B_Vy1dAM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-By94_cXW.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BLaMOS3s.js";import"./uniqBy-BCkqKtFw.js";import"./iteratee-CAJfiHj4.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BkhbrOAx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bs9jcdbm.js";import"./useAnimationId-BOOGmCHa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./tooltipContext-DWQIE0BH.js";import"./dataEntryStyles-RGg8_IXa.js";import"./ErrorBarContext-D-07T4-U.js";import"./activeStyles-CGX86F5-.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getZIndexFromUnknown-THeWY3ae.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./omit-CyNPTrPa.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
