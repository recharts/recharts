import{r as f,R as e}from"./iframe-Dofq_iQ-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CNyofDE0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D1WV8xVK.js";import{C as k}from"./ComposedChart-CsQfk666.js";import{X as K}from"./XAxis-BAcN42ay.js";import{L as v}from"./Legend-BpsZydhy.js";import{B as a}from"./Bar-lPvfRB9Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-hlz0weoU.js";import"./Text-DvhWb0Oj.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./throttle-DKmFrtnD.js";import"./dataEntryStyles-BZNZhw1g.js";import"./axisSelectors-CqE-voO2.js";import"./d3-scale-Bd78fIJ9.js";import"./CartesianAxis-BkbAUDQ6.js";import"./Layer-DmIM376f.js";import"./types-B7VCcYuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CETzgtk4.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6c3R0Fo.js";import"./uniqBy-pKrPA6ZI.js";import"./iteratee-eczRew1O.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-B73KwGvD.js";import"./useAnimationId-CwELIUBQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ywvlgolw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./tooltipContext-BvG4NH35.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./ErrorBarContext-D73mtL4f.js";import"./SetGraphicalItem-DU742dNa.js";import"./getZIndexFromUnknown-Lvxe1hvE.js";import"./useEffectiveDataKey-B7xEEKli.js";import"./omit-whIyt7SZ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
