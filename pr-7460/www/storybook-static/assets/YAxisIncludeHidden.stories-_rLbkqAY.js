import{r as f,R as e}from"./iframe-Bwb61Kb3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CFeDU12P.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D31yQesP.js";import{C as k}from"./ComposedChart-BS2K9hhM.js";import{X as K}from"./XAxis-CSW3SlTU.js";import{L as v}from"./Legend-B3Rg2U_i.js";import{B as s}from"./Bar-C9qBkTRy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cnvgfe2T.js";import"./CartesianAxis-BPlmGRVp.js";import"./Layer-Ci9WruQM.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./Label-C3p-lZQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Djnma_X0.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./types-Bi-bjjeC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DltxEF0x.js";import"./immer-_NZCx9ap.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./Symbols-DPteOK3M.js";import"./symbol-4yLH4m2i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ux3wQbfq.js";import"./uniqBy-CdjoT2zh.js";import"./iteratee-BFWaDkBd.js";import"./tooltipContext-DjXrxuIo.js";import"./AnimatedItems-4rj5S85S.js";import"./useAnimationId-h0tb0wwo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMlDVrj7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getZIndexFromUnknown-zcnBuJfC.js";import"./graphicalItemSelectors-hamdw4Lr.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
