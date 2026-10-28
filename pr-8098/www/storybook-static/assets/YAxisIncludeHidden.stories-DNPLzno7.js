import{r as f,R as e}from"./iframe-D4oHTXd2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BYtNm8pH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-FaOQzDXI.js";import{C as k}from"./ComposedChart-D_8jOcv5.js";import{X as K}from"./XAxis--JtbYt43.js";import{L as v}from"./Legend-Dw8wxeVg.js";import{B as a}from"./Bar-Bnf9mtw2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DP7jFvS8.js";import"./Text-CD7lZJQl.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./throttle-IWj5GY0g.js";import"./dataEntryStyles-CDeLNDqG.js";import"./axisSelectors-CDRP_sNf.js";import"./d3-scale-C56RpY6Y.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDz0Qovh.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyenIFMf.js";import"./uniqBy-DxBxaEGL.js";import"./iteratee-B-_7egyo.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-hm91Y5t7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUbFm90a.js";import"./useAnimationId-DDFQzbLJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./tooltipContext-Dg_R1Yo_.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./activeStyles-BnisSvy3.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getZIndexFromUnknown-QWb5nb3d.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./omit-C1TSx5SV.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
