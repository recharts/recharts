import{r as f,R as e}from"./iframe-BXeHtRRc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BMejmk_u.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-cE44OqOD.js";import{C as k}from"./ComposedChart-CG0nrh_K.js";import{X as K}from"./XAxis-tstPVLiw.js";import{L as v}from"./Legend-ClYQKqQo.js";import{B as s}from"./Bar-Ggy62pGK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CJL6L62i.js";import"./CartesianAxis-DlPp-Ttd.js";import"./Layer-G87RycP8.js";import"./resolveDefaultProps-C9hL96mo.js";import"./Text-CgCa4wia.js";import"./DOMUtils-Bki5Qsqq.js";import"./isWellBehavedNumber-D2wsJvGw.js";import"./Label-CmgKG_wT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdPLtMFq.js";import"./index-DvJ-fn_5.js";import"./index-B4hVWkse.js";import"./types-DFlY2any.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bxd2HCuP.js";import"./immer-DNshJjPH.js";import"./RechartsWrapper-BlW5dnlL.js";import"./index-BDGfSbM8.js";import"./index-Ovc1MJjY.js";import"./axisSelectors-DwMRPNyX.js";import"./d3-scale-D1ymsn93.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CfUKecxL.js";import"./chartDataContext-Cl-sRnxe.js";import"./CategoricalChart-Dcf-SEqg.js";import"./Symbols-wPfMfouo.js";import"./symbol-C_HdaqhA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D1DpNGPa.js";import"./uniqBy-CZHTY20m.js";import"./iteratee-BSnhLzO_.js";import"./tooltipContext-Bht5zZQi.js";import"./AnimatedItems-Cld-WhT6.js";import"./useAnimationId-DKoglaf7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLmys3HY.js";import"./ActiveShapeUtils-BHpJL8IG.js";import"./RegisterGraphicalItemId-CoToPco7.js";import"./ErrorBarContext-BsZ2YOp7.js";import"./GraphicalItemClipPath-Behn_RHh.js";import"./SetGraphicalItem-DrQ2NJnA.js";import"./getZIndexFromUnknown-LrIvujJ2.js";import"./graphicalItemSelectors-BDUX-E87.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
