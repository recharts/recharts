import{r as f,R as e}from"./iframe-BNtNFygj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BOh_LEcr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B5_48POF.js";import{C as k}from"./ComposedChart-D__S-XeQ.js";import{X as K}from"./XAxis-CD7gPBRF.js";import{L as v}from"./Legend-C7LMyXkq.js";import{B as a}from"./Bar-DSpok09j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CtODaKOy.js";import"./Text-CVsQWuYy.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./throttle-D7zSzoPk.js";import"./axisSelectors-mpzDPz7I.js";import"./d3-scale-AvjMremu.js";import"./CartesianAxis-B0AA9leW.js";import"./Layer-BWvVPR01.js";import"./types-Bv6DwZgB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CuiNtI3q.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BMYELo_i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BeuBChLi.js";import"./useAnimationId-DUqQXAVR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./tooltipContext-DG0MKKsE.js";import"./dataEntryStyles-Bi8dthc7.js";import"./ErrorBarContext-BnU4GK2I.js";import"./activeStyles-B8Yp5U6S.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getZIndexFromUnknown-Bj9xgBux.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./omit-CGPykWMN.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
