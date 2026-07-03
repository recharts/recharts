import{r as f,R as e}from"./iframe-Bqhaiwq8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BtCExx2a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BJS-a__d.js";import{C as k}from"./ComposedChart-oTFXmOZl.js";import{X as K}from"./XAxis-Du5noYHq.js";import{L as v}from"./Legend-CXGIZ9cu.js";import{B as s}from"./Bar-REXa0AwW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-217VZgzf.js";import"./Layer-Co0F7rtj.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./Label-D7swILSN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./types-OmV-cVYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./throttle-C_LSyirk.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./Symbols-BCm7UEXQ.js";import"./symbol-DfC1e8FG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CmWzJYxc.js";import"./uniqBy-yoTZI67c.js";import"./iteratee-CsXi7xCb.js";import"./tooltipContext-BZgtZUe3.js";import"./AnimatedItems-ZUM4uHMT.js";import"./useAnimationId-D0jk17bx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIkqYwDS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getZIndexFromUnknown-c6n4tA5_.js";import"./graphicalItemSelectors-CchqaGKR.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
