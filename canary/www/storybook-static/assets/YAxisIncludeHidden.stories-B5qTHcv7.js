import{r as f,R as e}from"./iframe-DFEJf-6F.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Cx2H2wIk.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bh4qmv0V.js";import{C as k}from"./ComposedChart-D1Kb8R-X.js";import{X as K}from"./XAxis-DQsdb669.js";import{L as v}from"./Legend-T4wJplzd.js";import{B as a}from"./Bar-CehlGihj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./Label-DJktLpOl.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./throttle-t_Ovqcxg.js";import"./axisSelectors-mOjibS9Y.js";import"./d3-scale-tiUNr7pP.js";import"./CartesianAxis-DcDhI6Zy.js";import"./Layer-BocGZ-Qs.js";import"./types-BDYL0NFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CjcGVgxW.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BWm_b5s0.js";import"./uniqBy-CV4gXzpe.js";import"./iteratee-WJSBnlLa.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-3agXA2tK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkydH7xZ.js";import"./useAnimationId-CO4-0stH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./tooltipContext-BiBs8VgD.js";import"./ErrorBarContext-BaUlHsru.js";import"./activeStyles-DE7rNFoN.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./getZIndexFromUnknown-CcmNpfj2.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./omit-Djllq5nh.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
