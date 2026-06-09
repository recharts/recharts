import{r as f,R as e}from"./iframe-Bvg5iw6Z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DfqNaUIm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ds_NjbNn.js";import{C as k}from"./ComposedChart-20ZO85Nl.js";import{X as K}from"./XAxis-DCRWzJVy.js";import{L as v}from"./Legend-By9J81jo.js";import{B as s}from"./Bar-w_3qaSM_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DHB3VUn4.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./Label-DkRUWIp2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./immer-DHoEBynv.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./Symbols-Cq3i7-Qm.js";import"./symbol-ht2nF6AE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DAsw9AdB.js";import"./uniqBy-B9Wdfl7r.js";import"./iteratee-BBjRdKWi.js";import"./tooltipContext--wyt8dyf.js";import"./AnimatedItems-BUtl3ij7.js";import"./useAnimationId-BOUeGlQ3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-prsUXg1E.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getZIndexFromUnknown-CrLsklXY.js";import"./graphicalItemSelectors-abwyxz13.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
