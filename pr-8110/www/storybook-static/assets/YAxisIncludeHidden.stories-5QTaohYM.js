import{r as f,R as e}from"./iframe-Diz1MxK0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-wJW4f648.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-De03ARmf.js";import{C as k}from"./ComposedChart-OhuMczYf.js";import{X as K}from"./XAxis-o44om-aN.js";import{L as v}from"./Legend-BFYiT0Jb.js";import{B as a}from"./Bar-2e4V2D-5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BN-_qB9f.js";import"./Text-Cd2gwijp.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./throttle-D6Fnchfm.js";import"./axisSelectors-DSSqtEqI.js";import"./d3-scale-DzLjpFUT.js";import"./CartesianAxis-g7INsdPw.js";import"./Layer-Bs_jv2-i.js";import"./types-DOhta01o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./Symbols-wvGU_BGG.js";import"./symbol-DdzwEmp4.js";import"./path-DyVhHtw_.js";import"./FillDefinition-CPr5Eo8P.js";import"./dataEntryStyles-D0onuRNm.js";import"./useElementOffset-DwoWFN5w.js";import"./uniqBy-BQH3eG4y.js";import"./iteratee-D_QiXIJe.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-UNOP6jku.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ibll1vv0.js";import"./useAnimationId-DrJNkikT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lZsBLYLZ.js";import"./tooltipContext-PDMqvzZw.js";import"./ErrorBarContext-8rAmb_-m.js";import"./activeStyles-DMKa5gXh.js";import"./SetGraphicalItem-R77n_H2E.js";import"./getZIndexFromUnknown-dpuuSD77.js";import"./useEffectiveDataKey-CP6w9Jk7.js";import"./omit-BtmCaYu8.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
