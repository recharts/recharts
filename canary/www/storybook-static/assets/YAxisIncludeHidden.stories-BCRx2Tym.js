import{r as f,R as e}from"./iframe-DQWQDaPi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C2-Mzga3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DcHJpvAl.js";import{C as k}from"./ComposedChart-BSJdMKGt.js";import{X as K}from"./XAxis-BBBhOkeu.js";import{L as v}from"./Legend-n_BkvOmU.js";import{B as s}from"./Bar-CxOE93s-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DuuyKMi1.js";import"./Text-C8i9V0Ud.js";import"./resolveDefaultProps-Booe6JJa.js";import"./DOMUtils-D6N96cFz.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfwFYr9r.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./throttle-BQvRWZqy.js";import"./axisSelectors-CuF4kGlO.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./CartesianAxis-DrD9H6GX.js";import"./Layer-7j8XoA_H.js";import"./types-D4LIC8ZM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./Symbols-BNIDe_iv.js";import"./symbol-DJaGR-_n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CLIiDdJ8.js";import"./uniqBy-fSK0oXn5.js";import"./iteratee-DdboyrOE.js";import"./tooltipContext-bs4hkATZ.js";import"./AnimatedItems-Brr5wTGw.js";import"./useAnimationId-C7lsUvOa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cj344d-6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./ErrorBarContext-Ch1rJbNM.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getZIndexFromUnknown-lb92iRUB.js";import"./graphicalItemSelectors-X4IgffWK.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
