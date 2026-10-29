import{r as f,R as e}from"./iframe-BVlfuHR1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-4InIcFXf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DKBlzg_K.js";import{C as k}from"./ComposedChart-BrTaz3ZS.js";import{X as K}from"./XAxis-DixivmhH.js";import{L as v}from"./Legend-CiJARbEk.js";import{B as a}from"./Bar-BEGwmIxN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ckax5Juk.js";import"./Text-BxId80OJ.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./throttle-B2Qtjc3W.js";import"./axisSelectors-Brqs7zw9.js";import"./d3-scale-BNlCtWSy.js";import"./CartesianAxis-CPYLIIET.js";import"./Layer-B5eXi8NV.js";import"./types-DYWAvxYY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DRZJzitw.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-B4sFAt8T.js";import"./dataEntryStyles-DSEQ0COb.js";import"./useElementOffset-CrNfCBWI.js";import"./uniqBy-B5YMrEOh.js";import"./iteratee-B_C-TQMi.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-qAsFJxAr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zs3F46mh.js";import"./useAnimationId-eAQDadKJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./tooltipContext-C85XqxZL.js";import"./ErrorBarContext-DAUTVb2k.js";import"./activeStyles-B82PQSZb.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getZIndexFromUnknown-DlaXSOxm.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./omit-DgaV2i7I.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
