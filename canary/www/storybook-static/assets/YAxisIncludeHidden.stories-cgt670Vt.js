import{r as f,R as e}from"./iframe-BbNtNwCn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C6UVi-mq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-VrNRi_G1.js";import{C as k}from"./ComposedChart-D4iN_2Rf.js";import{X as K}from"./XAxis-oTutdnda.js";import{L as v}from"./Legend-gXJOoLpY.js";import{B as a}from"./Bar-bSTZqkum.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bi0vIQjw.js";import"./Text-jR3JJSu6.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./DOMUtils-DKOsv_Gf.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./axisSelectors-BzyIizHG.js";import"./throttle-BKFxohT3.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./CartesianAxis-Ccs4Ad33.js";import"./Layer-DFZlw494.js";import"./types-fRbVNPnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./Symbols-Q9EOUoeU.js";import"./symbol-ByDZZZUG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CsS9BC38.js";import"./uniqBy-CEpMhxOs.js";import"./iteratee-YzPuL1o-.js";import"./AnimatedItems-LXQvjRXM.js";import"./useAnimationId-CCouJXLZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D88c0sgw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./tooltipContext-DcL2HawB.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getZIndexFromUnknown-BOFUsWpr.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
