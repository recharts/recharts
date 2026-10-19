import{r as f,R as e}from"./iframe-B-JmM6UU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-y-7tLGKF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C8zA9EPG.js";import{C as k}from"./ComposedChart-CCFLDqwG.js";import{X as K}from"./XAxis-C4JtUciF.js";import{L as v}from"./Legend-9Q_MpkC_.js";import{B as a}from"./Bar-TsLuLBq1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cf51nyga.js";import"./Text-DlcURdmF.js";import"./resolveDefaultProps-DLWiqyxh.js";import"./pageBackground-ox3rMkA1.js";import"./isWellBehavedNumber-DQDu_bHq.js";import"./useId-D9iNydjp.js";import"./useBackwardsCompatibleTheme-VmJV6TRL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DqLhyd5r.js";import"./index-BnGOySnb.js";import"./index-BOPh7oG5.js";import"./dataEntryStyles-BZpY2uoY.js";import"./axisSelectors-BOzuD9HL.js";import"./throttle-8T2wZGvQ.js";import"./d3-scale-YxBV3HYG.js";import"./CartesianAxis-CM5ea8KA.js";import"./Layer-05QvI-9e.js";import"./types-cRgwCxfH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZnDG7lD.js";import"./index-BvO0zfg2.js";import"./index-B935EuoS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DfO4pEP4.js";import"./index-D52JV6b6.js";import"./CartesianChart-B7NRlPSh.js";import"./chartDataContext-G_QhrL7C.js";import"./CategoricalChart-B_Dp9jOQ.js";import"./Symbols-CpFUVsBd.js";import"./symbol-D-KM-vyQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-7NR9MJAY.js";import"./uniqBy-BsjnheNl.js";import"./iteratee-B6OwKtMw.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DovphoLv.js";import"./useAnimationId-Bhe9ODDX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cjis6rUG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Lf70CQL3.js";import"./tooltipContext-C8j9rL3F.js";import"./RegisterGraphicalItemId-DykgIfL1.js";import"./ErrorBarContext-CpFTBBZZ.js";import"./GraphicalItemClipPath-BVkYhuPi.js";import"./SetGraphicalItem-CDXb3rWS.js";import"./getZIndexFromUnknown-B2Am4UM2.js";import"./useEffectiveDataKey-BDAANayS.js";import"./omit-4hEvhs7_.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
