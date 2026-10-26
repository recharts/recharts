import{r as f,R as e}from"./iframe-CV_Focqb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B-5hoebp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BMlZ-BTA.js";import{C as k}from"./ComposedChart-MH3garqG.js";import{X as K}from"./XAxis-CbmbdddR.js";import{L as v}from"./Legend-BTHfZ4-s.js";import{B as a}from"./Bar-DRk89vZc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Du5iQDtH.js";import"./Text-DkcQkg85.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./throttle-B3rCyY-p.js";import"./dataEntryStyles-BVJSTixW.js";import"./axisSelectors-BxeWYXvo.js";import"./d3-scale-CaWFw3Yv.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-gHoUEC4B.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BdGXytv2.js";import"./uniqBy-CNcyodij.js";import"./iteratee-D2eul8Fy.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DREKrdKH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkrXeBYw.js";import"./useAnimationId-DuuBzQL8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-180icphM.js";import"./tooltipContext-C5kefYz7.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./activeStyles-gddFfhxG.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getZIndexFromUnknown-hBVwK3Ok.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./omit-COEAGa6S.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
