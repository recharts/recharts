import{P as f,c as e}from"./iframe-BLrz4bzL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-7eks4-ql.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-c7WW4zRb.js";import{C as k}from"./ComposedChart-CpLjAKKa.js";import{X as K}from"./XAxis-B81A99CY.js";import{L as v}from"./Legend-BRGZIZox.js";import{B as s}from"./Bar-Blc1rXK1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CEp8r7kA.js";import"./CartesianAxis-BoM_TQOb.js";import"./Layer-CRR_7s_x.js";import"./resolveDefaultProps-NE4wXzst.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./Label-cQgelXjE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQpprPKw.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./types-C_iF2heC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ReLUkucO.js";import"./immer-Cj0-obxe.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./Symbols-TiNOGsKl.js";import"./symbol-CAXeb-zQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAtvFamF.js";import"./uniqBy-10OvI55m.js";import"./iteratee-CZgOWLEv.js";import"./tooltipContext-BmJN3Xo3.js";import"./ReactUtils-_7naDrvk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BW1N7Z3u.js";import"./useAnimationId-3KXs9R46.js";import"./ActiveShapeUtils-CXhzrWSQ.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./ErrorBarContext-C7bZMesM.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./getZIndexFromUnknown-39gaK2cu.js";import"./graphicalItemSelectors-AhcWJTdx.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
