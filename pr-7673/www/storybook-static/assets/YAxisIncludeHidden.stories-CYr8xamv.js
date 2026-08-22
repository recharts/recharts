import{r as f,R as e}from"./iframe-B2LONqI2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DmtbPyQK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D9n4dMgM.js";import{C as k}from"./ComposedChart-BOAgkMxe.js";import{X as K}from"./XAxis-CrFRKpzA.js";import{L as v}from"./Legend-BWi7hVYh.js";import{B as s}from"./Bar-BLlVwaOb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DIFUcr_M.js";import"./Text-DImCa3tX.js";import"./resolveDefaultProps-ByqX23gf.js";import"./DOMUtils-D3RPrc8V.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CjywmeuP.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./throttle-CdlfIoiX.js";import"./axisSelectors-DBW39Q04.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./CartesianAxis-CzeVRmKa.js";import"./Layer-Db6cgHvt.js";import"./types-B61LwKJ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./CategoricalChart-BjK9U0fb.js";import"./Symbols-BOVFOZD2.js";import"./symbol-DY0s62qR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGXGgodm.js";import"./uniqBy-C1sXPOkG.js";import"./iteratee-DobLqLd3.js";import"./AnimatedItems-DwGSOvtC.js";import"./useAnimationId-Cxf11lMm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cm9SrNkU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./tooltipContext-C5v1xzC4.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./ErrorBarContext-DheDy1BL.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getZIndexFromUnknown-TOXQj_EY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cyqw34Xe.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
