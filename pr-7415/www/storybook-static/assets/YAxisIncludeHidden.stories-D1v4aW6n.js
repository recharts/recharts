import{r as f,R as e}from"./iframe-dVDPDAoI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BD3X1oHR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bsc_tgY7.js";import{C as k}from"./ComposedChart-BPNopFli.js";import{X as K}from"./XAxis-Ra2gX97C.js";import{L as v}from"./Legend-3MGBFl1G.js";import{B as s}from"./Bar-P6ce0Ml4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-VpXFggwN.js";import"./CartesianAxis-BOKYqx2U.js";import"./Layer-M7jAw79j.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./Label-BEOAhV_I.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D86eoQTZ.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./types-jcNKZDcp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./immer-BdmkJOJr.js";import"./RechartsWrapper-BD3vbn3c.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./Symbols-9RqDgmZB.js";import"./symbol-0rLe6Tht.js";import"./path-DyVhHtw_.js";import"./useElementOffset-TBdqj4Y3.js";import"./uniqBy-Bo_ObW1a.js";import"./iteratee-DdGg6bBx.js";import"./tooltipContext-CiAj9sGp.js";import"./AnimatedItems-BynH3EWp.js";import"./useAnimationId-DHcuBUhz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cm-MJcqD.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./getZIndexFromUnknown-CrBxs90n.js";import"./graphicalItemSelectors-cLW-ET4H.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
