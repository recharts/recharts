import{r as f,R as e}from"./iframe-H7jEjneP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Vy_FZIWc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dwk71gAs.js";import{C as k}from"./ComposedChart-bb4rZ5JT.js";import{X as K}from"./XAxis-C43A4phh.js";import{L as v}from"./Legend-qia_N5yl.js";import{B as a}from"./Bar-CzTFnMIP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DbiDHxJi.js";import"./Text-B4P_g0R9.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./DOMUtils-C61hDB9-.js";import"./isWellBehavedNumber-DWCHHiO4.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5waeKBAU.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./throttle-Bn1i2xOI.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./index-DrbE-eKG.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./CartesianAxis-YWS3Tdxj.js";import"./Layer-FJAqqNNz.js";import"./types-CAmW2CbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./Symbols-CP2hyogX.js";import"./symbol-DrfccpTF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-v2aajhRC.js";import"./uniqBy-Du05t_Lg.js";import"./iteratee-B7EKCWvZ.js";import"./AnimatedItems-zgVz-4ei.js";import"./useAnimationId-CpeZSN5w.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWvJG87S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6A9Zooe8.js";import"./tooltipContext-XecBVIxH.js";import"./RegisterGraphicalItemId-BUF7N8O-.js";import"./ErrorBarContext-VTewkZK5.js";import"./GraphicalItemClipPath-7Dat9Ey8.js";import"./SetGraphicalItem-sO5iD_xL.js";import"./getZIndexFromUnknown-CF9tgXbe.js";import"./useGraphicalItemIdentity-DWbVUF44.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
