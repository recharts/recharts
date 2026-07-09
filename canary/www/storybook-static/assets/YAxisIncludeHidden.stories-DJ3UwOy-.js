import{r as f,R as e}from"./iframe-DTfUMuxI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DiRZk9gW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DgbTd9h0.js";import{C as k}from"./ComposedChart-OGPUNqC6.js";import{X as K}from"./XAxis-CKFG07JY.js";import{L as v}from"./Legend-Bt2iSyJP.js";import{B as s}from"./Bar-BznAYTF3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CzVgKTyr.js";import"./Layer-fCILtQSz.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./Label-Sgtp5mjO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhQOtpEj.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./types-CausIaox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./throttle-DSBiY2UW.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./axisSelectors-D0YyYzBU.js";import"./d3-scale-DrphVPA4.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./Symbols-BOI72eZ2.js";import"./symbol-CpDIKgsQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrOTra1T.js";import"./uniqBy-C0UbEHN4.js";import"./iteratee-DaP6RRgm.js";import"./tooltipContext-E8pJyhGS.js";import"./AnimatedItems-DnEACLZT.js";import"./useAnimationId-BT6QlGBk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf96Egf9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getZIndexFromUnknown-BEXihlZA.js";import"./graphicalItemSelectors-Dfl11C67.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
