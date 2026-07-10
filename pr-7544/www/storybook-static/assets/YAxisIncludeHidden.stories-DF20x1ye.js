import{r as f,R as e}from"./iframe-DfxvUCoY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CHYqw0Yg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-a1aajdGJ.js";import{C as k}from"./ComposedChart-C8jbAnB3.js";import{X as K}from"./XAxis-CDwQyzI6.js";import{L as v}from"./Legend-BxQh4kdT.js";import{B as s}from"./Bar-_Y8ctb1b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./isWellBehavedNumber-By0pufN4.js";import"./Label-Db_taApy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYPoLUrq.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./throttle-CY5RCzqb.js";import"./RechartsWrapper-DKrR_shM.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./Symbols-wpUxxR7U.js";import"./symbol-Dlj2CrYw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEOZ1gXg.js";import"./uniqBy-Aa4pim-J.js";import"./iteratee-CZBfFxXi.js";import"./tooltipContext-IY9SJduJ.js";import"./AnimatedItems-DEpW04f-.js";import"./useAnimationId-D9BVxJGQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dl1vC_ro.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCjs6TQU.js";import"./RegisterGraphicalItemId-uzM-_OM4.js";import"./ErrorBarContext-D2pK0104.js";import"./GraphicalItemClipPath-D5-jIAHW.js";import"./SetGraphicalItem-8Isqc2ZP.js";import"./getZIndexFromUnknown-qwMb2aOW.js";import"./graphicalItemSelectors-CrE8OTzf.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
