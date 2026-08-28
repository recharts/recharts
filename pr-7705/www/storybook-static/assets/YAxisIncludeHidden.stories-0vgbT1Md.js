import{r as f,R as e}from"./iframe-D3n-qa3v.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B-l06g0y.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-URMJGlQl.js";import{C as k}from"./ComposedChart-IfzjzOLd.js";import{X as K}from"./XAxis-BvFg4s2o.js";import{L as v}from"./Legend-CGP__KEG.js";import{B as s}from"./Bar-C40_3rUx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CpaVgYY8.js";import"./Text-70ucIKSF.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./DOMUtils-CcpQZ2_k.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hb7j23f9.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./RechartsWrapper-DDHIckB2.js";import"./axisSelectors-DaB7yAHm.js";import"./throttle-DN7vm2uB.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./Symbols-BdsIUlir.js";import"./symbol-ePdn19-e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-E97WR8Kk.js";import"./uniqBy-DeyvTwgR.js";import"./iteratee-CJAX1ry0.js";import"./AnimatedItems-CRkuoQfP.js";import"./useAnimationId-CKWjvm6q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIHrotSs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0ntRQ4Qt.js";import"./tooltipContext-7QS7o6eC.js";import"./RegisterGraphicalItemId-DsY94qP2.js";import"./ErrorBarContext-DijZHKAW.js";import"./GraphicalItemClipPath-Ch9sm1k7.js";import"./SetGraphicalItem-BmMhxnaz.js";import"./getZIndexFromUnknown-DhGOj4bU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DH8vxCD6.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
