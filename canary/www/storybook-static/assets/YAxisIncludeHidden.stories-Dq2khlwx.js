import{r as f,R as e}from"./iframe-BxezfZww.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CLrmrnP-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-HcjonX2F.js";import{C as k}from"./ComposedChart-lZLISn57.js";import{X as K}from"./XAxis-CiqbzTox.js";import{L as v}from"./Legend-BdxBUo-d.js";import{B as s}from"./Bar-CxnpRt_n.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./DOMUtils-DML8OagK.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DCAxC-a3.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./throttle-kDZpq7hG.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianAxis-DN3oreA6.js";import"./Layer-B7Lou8N3.js";import"./types-CqtRzysP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./Symbols-pAbRtZ_g.js";import"./symbol-Env5CKNw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BSnhPvQn.js";import"./uniqBy-CZlT9ctG.js";import"./iteratee-B_pdIMYS.js";import"./AnimatedItems-szXuAxdz.js";import"./useAnimationId-DlB6WviS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EFbhg0-p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./tooltipContext-CfXPAL1U.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./ErrorBarContext-1IA4vt79.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getZIndexFromUnknown-DySiGNfw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C5f0vLre.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
