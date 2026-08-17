import{r as f,R as e}from"./iframe-B8V7BJ0L.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BU97uoiQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D-1XQb3V.js";import{C as k}from"./ComposedChart-ixqus0AO.js";import{X as K}from"./XAxis-R6swZGmX.js";import{L as v}from"./Legend-J09ZaTSW.js";import{B as s}from"./Bar-N7dNDDRi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-eqtAA7cE.js";import"./Text-DNMx3NKa.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./DOMUtils-BPFNazbq.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9SG3bxa.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./throttle-CesEnXHC.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianAxis-BCPc0Lsn.js";import"./Layer-DSZQNu8u.js";import"./types-Bynmgm1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./Symbols-Dn_MwxmN.js";import"./symbol-DCQGgXT5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BQ3aMjmL.js";import"./uniqBy-8Hs_PlTr.js";import"./iteratee-CVu6Uo0K.js";import"./AnimatedItems-D2zk6WJL.js";import"./useAnimationId-D0vrdmF4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle---gO3v41.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./tooltipContext-CEVPo_xf.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./ErrorBarContext-T5Q1bKBI.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getZIndexFromUnknown-CChIbJyP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Docn_iQt.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
