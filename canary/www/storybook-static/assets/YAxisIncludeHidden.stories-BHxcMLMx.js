import{r as f,R as e}from"./iframe-CgifVdGo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CdCViLx5.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-cYNAtEFZ.js";import{C as k}from"./ComposedChart-CGqH3jPg.js";import{X as K}from"./XAxis-CZyFu1IP.js";import{L as v}from"./Legend-7_W2X7gA.js";import{B as s}from"./Bar-BdAA9yXR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-5D6mywdN.js";import"./Layer-CeyNxq54.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./Label-TzQ7qbgp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./types-IwSvkxMz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./throttle-RNDoIp5v.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./axisSelectors-BoKC2N9p.js";import"./d3-scale-B4rm30Tj.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./Symbols-Cv5yDpJ-.js";import"./symbol-DQfiD1hp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ddd5eBYU.js";import"./uniqBy-B-PlV6wf.js";import"./iteratee-Cmxxp19p.js";import"./tooltipContext-B_rgmVpc.js";import"./AnimatedItems-wyY7R1ar.js";import"./useAnimationId-B2JL6a3u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-0uJ_DBQ4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./ErrorBarContext-CK5Inlk3.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getZIndexFromUnknown-Be2Ot0sy.js";import"./graphicalItemSelectors-BbHJl_IG.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
