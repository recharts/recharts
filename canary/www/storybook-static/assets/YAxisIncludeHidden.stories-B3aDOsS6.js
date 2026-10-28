import{r as f,R as e}from"./iframe-BC-aHfbH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-7iDdsVaV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ALhwVSt9.js";import{C as k}from"./ComposedChart-DeGO-OTb.js";import{X as K}from"./XAxis-q4A2d4Zb.js";import{L as v}from"./Legend-DcT4Ux8D.js";import{B as a}from"./Bar-BwOghHn2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dza1R5dY.js";import"./Text-DARS5OxC.js";import"./resolveDefaultProps-4x113t0l.js";import"./pageBackground-Dg-zxncN.js";import"./ZIndexLayer-PUdKiesE.js";import"./index-B-RSdHgQ.js";import"./index-Dvj4AXX_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEKrNeLt.js";import"./throttle-a7-GQed4.js";import"./dataEntryStyles-xanZasRf.js";import"./axisSelectors-D-qF4r4u.js";import"./d3-scale-BzoWDajH.js";import"./CartesianAxis-CunRUAHg.js";import"./Layer-C9TfFY4n.js";import"./types-CqRAzbay.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3P53zmh.js";import"./index-ByUj-B7C.js";import"./index-C7cb-ZYS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B9wYdCxx.js";import"./index-BCHOiCIM.js";import"./CartesianChart-CLm_Ee8q.js";import"./ZIndexPortal-BGbnB8Y2.js";import"./CategoricalChart--pFm79aa.js";import"./Symbols-BzxAfvdI.js";import"./symbol-DmUuFZcN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkUyr6Xi.js";import"./uniqBy-BX-k5AJw.js";import"./iteratee-BGB8LHfi.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BVv1SXpb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-FJmdRxpu.js";import"./useAnimationId-Dd0TyqHP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJ-tBBEV.js";import"./tooltipContext-DFMpmYDz.js";import"./RegisterGraphicalItemId-BsiO5PX-.js";import"./ErrorBarContext-C6fbu3f2.js";import"./activeStyles-1D-OxyIQ.js";import"./SetGraphicalItem-B0IeAy6L.js";import"./getZIndexFromUnknown-CG9rV2QH.js";import"./useEffectiveDataKey-CqM8v6g-.js";import"./omit-DU8aGmDd.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
