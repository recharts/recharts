import{r as f,R as e}from"./iframe-8lQPdWqg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B8-aAKdo.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-HgvYxHxO.js";import{C as k}from"./ComposedChart-nJhIiDmQ.js";import{X as K}from"./XAxis-DJEDKgVX.js";import{L as v}from"./Legend-DPXKScSx.js";import{B as s}from"./Bar-WfYPDZ05.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BByPkrE2.js";import"./CartesianAxis-DwSWDszA.js";import"./Layer-CDc8atAP.js";import"./resolveDefaultProps-D5naey2E.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./Label-Dm0B15Tp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBi4-krB.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./types-CT--YnpL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BULVvGQu.js";import"./immer-BzJ0g7On.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./Symbols-B9gudQGC.js";import"./symbol-Cnindm4l.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrKF9R5o.js";import"./uniqBy-CjCz0Q6p.js";import"./iteratee-Db3NWcbd.js";import"./tooltipContext-nL6J0rER.js";import"./AnimatedItems-DC4nP9_V.js";import"./useAnimationId-Bv0dv7sa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOIggd48.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getZIndexFromUnknown-CHrP0GS6.js";import"./graphicalItemSelectors-Boc2l_BC.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
