import{r as f,R as e}from"./iframe-GS6tWWpF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CUfaioHk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiKhndgZ.js";import{C as k}from"./ComposedChart-Dl8H5i_v.js";import{X as K}from"./XAxis-Bx65GQrC.js";import{L as v}from"./Legend-Ctt76U1g.js";import{B as s}from"./Bar-Dg_8Ug7j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DPqu1YVY.js";import"./Layer-C3MBqN5-.js";import"./resolveDefaultProps-BZjeTZ39.js";import"./Text-CUZPSeM8.js";import"./DOMUtils-cB85CLZU.js";import"./isWellBehavedNumber-BW5zPDve.js";import"./Label--UyVH_YZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CvFwUsq0.js";import"./index-DfG20-Zs.js";import"./index-C2uAvHn9.js";import"./types-CDHFW4tQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BVCAtPIh.js";import"./throttle-C-IXy7Zr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Bqosr4xy.js";import"./index-C6xrf2-Z.js";import"./index-Di15QQ8x.js";import"./axisSelectors-yfKyalbW.js";import"./d3-scale-CHW2xi3e.js";import"./CartesianChart-DRtNG600.js";import"./chartDataContext-BZ0W7ETA.js";import"./CategoricalChart-CsHskHmr.js";import"./Symbols-BhQRMxL7.js";import"./symbol-B6SQN_ex.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFy6UBvQ.js";import"./uniqBy-JuZLKXnX.js";import"./iteratee-BtotmXAq.js";import"./tooltipContext-L8ivyxdx.js";import"./AnimatedItems-DA4k4owl.js";import"./useAnimationId-ZFeP4ddJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdIuzb_S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DTjXKb5y.js";import"./RegisterGraphicalItemId-BRazAOV1.js";import"./ErrorBarContext-D6lw1b7W.js";import"./GraphicalItemClipPath-fALP-Awj.js";import"./SetGraphicalItem-XvYC4EkM.js";import"./getZIndexFromUnknown-CVlWAVnv.js";import"./graphicalItemSelectors-CfeuQ5do.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
