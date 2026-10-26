import{r as f,R as e}from"./iframe-CcLWsqZ6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BSdoGpjP.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-qEbbRsug.js";import{C as k}from"./ComposedChart-EaqAREPx.js";import{X as K}from"./XAxis-BgOtkzm1.js";import{L as v}from"./Legend-CnZ3wN7p.js";import{B as a}from"./Bar-SLu3_c4A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-FbOJbP-p.js";import"./Text-B8YpIyQn.js";import"./resolveDefaultProps-DIHsajMe.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./throttle-QCGHXTx2.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./axisSelectors-DKMD16Y3.js";import"./d3-scale-C4Z54rtJ.js";import"./CartesianAxis-nGOA1KMV.js";import"./Layer-Cid6c7Vb.js";import"./types-B5Ef_z7I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BXLQXmKg.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzNyUy0f.js";import"./uniqBy-Bl1hupsk.js";import"./iteratee-BmEXTGiW.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-l3ZfSaP4.js";import"./useAnimationId-D35HAJRU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6aDAVT3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./tooltipContext-jb5dZxBY.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./ErrorBarContext-BFxrQbxP.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./getZIndexFromUnknown-CZfxuGzz.js";import"./useEffectiveDataKey-7iKmBNHY.js";import"./omit-C3SYmDSk.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
