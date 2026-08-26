import{r as f,R as e}from"./iframe-C2IAoP9z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CkTJLDxP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BOdY0c2w.js";import{C as k}from"./ComposedChart-B9_G-h0N.js";import{X as K}from"./XAxis-Ceu0E44T.js";import{L as v}from"./Legend-BhvsLI5l.js";import{B as s}from"./Bar-BJRDlvXX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DAn48o-H.js";import"./Text-Cay_E7zv.js";import"./resolveDefaultProps-CEcc3HUE.js";import"./DOMUtils-SGZ0CxAs.js";import"./isWellBehavedNumber-Dx9jutoa.js";import"./useId-B5XgiE_K.js";import"./useBackwardsCompatibleTheme-Dqn1q3dG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqO-ONcy.js";import"./index-Bc8qjgC3.js";import"./index-OAErDOz1.js";import"./RechartsWrapper-CGBW-uJJ.js";import"./index-ozLvQTxr.js";import"./index-Dzs-h2I5.js";import"./throttle-CMLI9bDX.js";import"./axisSelectors-Cc0lgYtN.js";import"./d3-scale-Cvy-Ur2o.js";import"./renderedTicksSlice-CQpIMs9x.js";import"./CartesianAxis-CxQqbA0R.js";import"./Layer-c70k-pgH.js";import"./types-BONlApS2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dhpx6_3-.js";import"./chartDataContext-D77crK3E.js";import"./CategoricalChart-Q-FJ4faS.js";import"./Symbols-1DJfKNFx.js";import"./symbol-CLYRJo2K.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlQ6_KNY.js";import"./uniqBy-Dak74J6O.js";import"./iteratee-CHgj4-IF.js";import"./AnimatedItems-D3kWiSe3.js";import"./useAnimationId-DzFP_Ei6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I7JckY3r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dJNYAFGN.js";import"./tooltipContext-DMq3_cys.js";import"./RegisterGraphicalItemId-BFnewc-x.js";import"./ErrorBarContext-XS2v7-8C.js";import"./GraphicalItemClipPath-j5P5g_UT.js";import"./SetGraphicalItem-CB0dHT4c.js";import"./getZIndexFromUnknown-DWwGDHhC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CWQ_KFxX.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
