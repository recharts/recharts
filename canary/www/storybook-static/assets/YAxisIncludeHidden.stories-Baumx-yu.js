import{r as f,R as e}from"./iframe-1v9h95J8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DahzdkhC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BhjZ46tE.js";import{C as k}from"./ComposedChart-CQ6NotWx.js";import{X as K}from"./XAxis-C3_Gtrrp.js";import{L as v}from"./Legend-DJerxEMx.js";import{B as s}from"./Bar-DuLPR8zA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLKDqP8g.js";import"./Text-t2WYL4eB.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./DOMUtils-Duwm3W6u.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClRRfs-A.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./throttle-Dy0aiko3.js";import"./axisSelectors-BWhm0UuR.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./CartesianAxis-BrAAElTJ.js";import"./Layer-BGkgrUb2.js";import"./types-Bc5JlxqX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./Symbols-vePz1Ugz.js";import"./symbol-D9KhyOxI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dyp5e5y2.js";import"./uniqBy-BO5r3yE5.js";import"./iteratee-CWaP7vY_.js";import"./AnimatedItems-BtjOxZbL.js";import"./useAnimationId-1FoMJdgT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BArip1lr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./tooltipContext-C8yzlazJ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getZIndexFromUnknown-CvXnk0Gx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJQDelow.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
