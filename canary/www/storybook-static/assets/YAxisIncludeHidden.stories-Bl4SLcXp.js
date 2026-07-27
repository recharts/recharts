import{r as f,R as e}from"./iframe-BvniDb9M.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C-4Yxbjy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BcwOacrL.js";import{C as k}from"./ComposedChart-nO90MrSp.js";import{X as K}from"./XAxis-BS2okIrv.js";import{L as v}from"./Legend-tPSv8ExG.js";import{B as s}from"./Bar-DL1DWklR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DPYSgkyQ.js";import"./Layer-BeZmz3fH.js";import"./resolveDefaultProps-C1GGU34C.js";import"./Text-uf6L8i_t.js";import"./DOMUtils-tzx2ZbvF.js";import"./isWellBehavedNumber-sm35pCXt.js";import"./Label-CRekt_d8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-zEe-x6YM.js";import"./index-D2mR6oQd.js";import"./index-Be0pPrY3.js";import"./types-7Vi0xZSr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BGoDlWDo.js";import"./throttle-BEm3mroc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-0MN2RCFI.js";import"./index-DjBFZJXg.js";import"./index-Qpj6j6nv.js";import"./axisSelectors-DxOnbDS4.js";import"./d3-scale-B3McImOd.js";import"./CartesianChart-BIATkAst.js";import"./chartDataContext-C9IBj5vS.js";import"./CategoricalChart-COioiDUR.js";import"./Symbols-Dh_Ja7Yn.js";import"./symbol-DYXxaJLg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BCU-HEUT.js";import"./uniqBy-C0TLtkCt.js";import"./iteratee-DcuBj_VF.js";import"./tooltipContext-fpzaSwl0.js";import"./AnimatedItems-BpsFGEZb.js";import"./useAnimationId-DrHlUTZ7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1l69Ju4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CNIg2u1g.js";import"./RegisterGraphicalItemId-MKP5vUa-.js";import"./ErrorBarContext-NX_u8AwJ.js";import"./GraphicalItemClipPath-BlXsJvMF.js";import"./SetGraphicalItem-CUESYdxZ.js";import"./getZIndexFromUnknown-Der4W32T.js";import"./graphicalItemSelectors-CQr8r3Ct.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
