import{r as f,R as e}from"./iframe-Dop2FCJV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B3k634-q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nsfMN2si.js";import{C as k}from"./ComposedChart-Om7t0Gx9.js";import{X as K}from"./XAxis-BotDK1s5.js";import{L as v}from"./Legend-BueZ2WTQ.js";import{B as a}from"./Bar-B8eYyFxS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BDgfZPfI.js";import"./Text-umIfGz-9.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./throttle-D7xfBLch.js";import"./dataEntryStyles-DYOt2-v1.js";import"./axisSelectors-CeHIB0K5.js";import"./d3-scale-Cxj7JE2J.js";import"./CartesianAxis-DU3QwiMj.js";import"./Layer-B-MIuFUl.js";import"./types-BszWz-w9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ziCTvKBS.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D9LA4JWt.js";import"./uniqBy-BuyM_tyo.js";import"./iteratee-By-O6bqn.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DYliLjPH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLrutJrV.js";import"./useAnimationId-CQv1eLqe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./tooltipContext-e4TcJLsg.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./ErrorBarContext-DG2LKBNq.js";import"./activeStyles-DnOLUEXC.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getZIndexFromUnknown-BWAlY1HO.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./omit-BkqaImpn.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
