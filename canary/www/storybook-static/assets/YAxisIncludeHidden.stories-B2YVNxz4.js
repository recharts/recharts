import{r as f,R as e}from"./iframe-BfMFh77x.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-KlCpPZpc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cztpg_sh.js";import{C as k}from"./ComposedChart-9snNPueS.js";import{X as K}from"./XAxis-k9LTsr7W.js";import{L as v}from"./Legend-CNSbhcMK.js";import{B as a}from"./Bar-wBG5AvKu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D2fJdiFl.js";import"./Text-DEsVSfke.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./DOMUtils-CakfvwTP.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DqwLDNFX.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./RechartsWrapper-C0SS5kvR.js";import"./axisSelectors-DoWmjLIh.js";import"./throttle-BwatAsiE.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./CartesianAxis-BFOn3Dtf.js";import"./Layer-ckuwG36h.js";import"./types-Ccphz-V5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./Symbols-DKR4yZKi.js";import"./symbol-C9lvVV-5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVbgoa7K.js";import"./uniqBy-ZtJmq_p1.js";import"./iteratee-Blwx8XDY.js";import"./AnimatedItems-DBTQ-7wC.js";import"./useAnimationId-DwVIllah.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-r3IYiQGz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./tooltipContext-CccmVbNZ.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./ErrorBarContext-CANgFbqT.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./getZIndexFromUnknown-DtBOCMdY.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./dataEntryStyles-D_xHI-do.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
