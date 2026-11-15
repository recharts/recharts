import{r as f,R as e}from"./iframe-BhLunS0i.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D6-PxaVK.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DSPJCLFE.js";import{C as k}from"./ComposedChart-prDwTclO.js";import{X as K}from"./XAxis-gG48cTvb.js";import{L as v}from"./Legend-CXDoxvwS.js";import{B as a}from"./Bar-D3eSmVqn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKkx1Yqi.js";import"./Text-DaAfyhaD.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./ZIndexLayer-DT0AmS3A.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./throttle-CRN4ZNKA.js";import"./axisSelectors-D1ydZeah.js";import"./d3-scale-DitufHHw.js";import"./CartesianAxis-D8zKHO5C.js";import"./Layer-BM8-5uQX.js";import"./types-CT83QobA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqLb8czN.js";import"./uniqBy-BLbM-jB1.js";import"./iteratee-BGzKQzLt.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ioyw2VQ4.js";import"./useAnimationId-Xa81ZCl9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./tooltipContext-BSuL8M8T.js";import"./ErrorBarContext-B9XBEKPc.js";import"./activeStyles-CJzsRDKh.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getZIndexFromUnknown-Yq7_IgfD.js";import"./useEffectiveDataKey-0h-gJoNJ.js";import"./omit-CUktut_P.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
