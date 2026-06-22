import{r as f,R as e}from"./iframe-DX1vtGMO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-oQ2494Ky.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CBHqXPZu.js";import{C as k}from"./ComposedChart-DrTtv4BR.js";import{X as K}from"./XAxis-DLegRWnR.js";import{L as v}from"./Legend-C7VLggpR.js";import{B as s}from"./Bar-o5JgSupJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cgjumwe9.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./Label-D5WIiRBw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DdHbybrS.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./immer-CyjJLdoY.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./Symbols-Cgj4MZk1.js";import"./symbol-B0aoDzxh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHGceypl.js";import"./uniqBy-DwA9whMp.js";import"./iteratee-BRHNmftS.js";import"./tooltipContext-CvjXurKP.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-m_tCbE2d.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getZIndexFromUnknown-D4KP04dP.js";import"./graphicalItemSelectors-BqxEcvOJ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
