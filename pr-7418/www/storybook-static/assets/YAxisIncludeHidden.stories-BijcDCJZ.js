import{r as f,R as e}from"./iframe-B32UfMsX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-4E9uo8Up.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkyNtvIV.js";import{C as k}from"./ComposedChart-QBL839d_.js";import{X as K}from"./XAxis-DsOSB3OX.js";import{L as v}from"./Legend-9mbWf1fU.js";import{B as s}from"./Bar-DmuuFxqL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CT3OO5rn.js";import"./CartesianAxis-CrAWHyC2.js";import"./Layer-M7lMUPI2.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./Label-Ba3mw93_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DIk8UPq9.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./types-BFdTLIuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./immer-BidytqCU.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./Symbols-C2ESKxkV.js";import"./symbol-CXCFISh0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dj3OO3b3.js";import"./uniqBy-DT8uU73i.js";import"./iteratee-CxBZkxbt.js";import"./tooltipContext-BLrLP8j9.js";import"./AnimatedItems-CWOjCZuo.js";import"./useAnimationId-kKOEl60u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chp3lP1V.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getZIndexFromUnknown-CctZbkJb.js";import"./graphicalItemSelectors-CCBoqdYH.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
