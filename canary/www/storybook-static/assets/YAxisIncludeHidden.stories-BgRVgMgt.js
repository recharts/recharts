import{r as f,R as e}from"./iframe-CKQALtMh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-qP5Po20_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfJvDCP6.js";import{C as k}from"./ComposedChart-B57mEn44.js";import{X as K}from"./XAxis-B1w-DAje.js";import{L as v}from"./Legend-BN-SMuns.js";import{B as a}from"./Bar-gWQRt7Py.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CkbIGog0.js";import"./Text-DyEflBvv.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./DOMUtils-CBXByqiO.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Crva3HCE.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./RechartsWrapper-C-mneK7p.js";import"./axisSelectors-BxBnek0X.js";import"./throttle-CNY-gU5B.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./index-B2SRoqlS.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./CartesianAxis-D4n_YP7-.js";import"./Layer-B9JOU9_x.js";import"./types-CDJ3ls6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./Symbols-DPTV3bc9.js";import"./symbol-3Q6SdgaO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRkOZJXl.js";import"./uniqBy-9yJLU1-D.js";import"./iteratee-jIVZW5Io.js";import"./AnimatedItems-DTXdR5ab.js";import"./useAnimationId-CKMmFYBQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CY_2zxpD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./tooltipContext-DUJFLpBZ.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./ErrorBarContext-rH9p4zIJ.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getZIndexFromUnknown-Cmaa_Ckd.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./dataEntryStyles-B35Ms32v.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
