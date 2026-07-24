import{r as f,R as e}from"./iframe-Dz-8xobX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BHn5bCj9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLGpG8sy.js";import{C as k}from"./ComposedChart-gmjevVFY.js";import{X as K}from"./XAxis-DMj3Kvex.js";import{L as v}from"./Legend-D-2DjTxY.js";import{B as s}from"./Bar-Bpib3a2A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BSXwVKyu.js";import"./Layer-DM8xvsTO.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./Label-CUth2UOL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BepkwV1X.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./types-B2b4Ay33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./throttle-BhiZXvYf.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./axisSelectors-RA5EatZ8.js";import"./d3-scale-Eu5vW6Yz.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./Symbols-BD06pTHM.js";import"./symbol-mTWSg8U_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BzS3hzef.js";import"./uniqBy-C0Bh4kGh.js";import"./iteratee-DFjnW7Yu.js";import"./tooltipContext-C-wo4XUe.js";import"./AnimatedItems-C8QaJVru.js";import"./useAnimationId-DHQotoBY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjULrVDC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./ErrorBarContext-CHoqNUZJ.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getZIndexFromUnknown-DBvZT4FK.js";import"./graphicalItemSelectors-D1gNtFov.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
