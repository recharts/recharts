import{r as f,R as e}from"./iframe-Dt9aG847.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-AwRjL7js.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C3sOwbsK.js";import{C as k}from"./ComposedChart-CpvmmgfC.js";import{X as K}from"./XAxis-ChVo-6Tw.js";import{L as v}from"./Legend-VWR7wVeT.js";import{B as a}from"./Bar-D3CcsYoq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0OpL57DR.js";import"./Text-6YRDeSKh.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./throttle-DjDKvtka.js";import"./axisSelectors-Bm-O_fE3.js";import"./d3-scale-DLGbz4xh.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CgsNUza7.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-2orHetLh.js";import"./uniqBy-BigEltI1.js";import"./iteratee-CIF51Rnw.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Dmjy57ut.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDhWHAzv.js";import"./useAnimationId-CJa-E4MR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./tooltipContext-UvrNDSbW.js";import"./dataEntryStyles-V0ugCGFO.js";import"./ErrorBarContext-BlC639ix.js";import"./activeStyles-D2EMNXIV.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getZIndexFromUnknown-Cls4SazI.js";import"./useEffectiveDataKey-DvT2OXI-.js";import"./omit-DQn6Z1Av.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
