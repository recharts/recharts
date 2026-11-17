import{r as f,R as e}from"./iframe-66xGksI9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BiYwIvVw.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CYY5i5GC.js";import{C as k}from"./ComposedChart-BcXiD_oS.js";import{X as K}from"./XAxis-CXNDEo4D.js";import{L as v}from"./Legend-CIRRr9kw.js";import{B as a}from"./Bar-DqIGdAPS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CZY2Xnwr.js";import"./Text-DBDWQ-k-.js";import"./resolveDefaultProps-CNf-20ax.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./throttle-pB5GcO80.js";import"./axisSelectors-c7Es3nNM.js";import"./d3-scale-Ni_fDMoN.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJCmtGIc.js";import"./uniqBy-9AjO9xab.js";import"./iteratee-C80Q0yRq.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_Uv0gGo.js";import"./useAnimationId-CE-ISBvq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./tooltipContext-B-UZ8kkJ.js";import"./ErrorBarContext-Cekx66Ji.js";import"./activeStyles-ueUYGAtI.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./getZIndexFromUnknown-B1X1P9Vg.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./omit-DAnAWpso.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
