import{r as f,R as e}from"./iframe-Bc8uafj_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-TQ1T3gnX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgIKKnku.js";import{C as k}from"./ComposedChart-BaFcNv6t.js";import{X as K}from"./XAxis-D3U7ZnRc.js";import{L as v}from"./Legend-BXU6Biuu.js";import{B as s}from"./Bar-BApgxmCZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CoQ1aHe8.js";import"./CartesianAxis-DjGZfAuA.js";import"./Layer-BOwFFWNG.js";import"./resolveDefaultProps-D94aQw_7.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./Label-3HS03WWg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEkWbSjN.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./types-unK8WfaH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDLhDidm.js";import"./immer-DhRCiF9y.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./Symbols-CDHLQFdp.js";import"./symbol-DMI8nJp8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-IpZ5186H.js";import"./uniqBy-B_P63sZB.js";import"./iteratee-NS3BASsA.js";import"./tooltipContext-DDVEvwZL.js";import"./AnimatedItems-CDgcpQiE.js";import"./useAnimationId-CUqgRxQq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_1O-YWH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./ErrorBarContext-BEm0gOJL.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getZIndexFromUnknown-C5koHWL4.js";import"./graphicalItemSelectors-D1B9Vbyd.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
