import{r as f,R as e}from"./iframe-CQz631Nk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CWW4X-Ki.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BiY29BHb.js";import{C as k}from"./ComposedChart-B-N3Zjvf.js";import{X as K}from"./XAxis-DHy0v3jD.js";import{L as v}from"./Legend-BRP3UmY1.js";import{B as s}from"./Bar-BjKBeWJq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQhaNgKG.js";import"./Text-CpmwLb5H.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./DOMUtils-V3cEDC71.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LgQGURcB.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./throttle-tlVaut9a.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Layer-DGn6U-cs.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./Symbols-BRx4T2_d.js";import"./symbol-JqaxEo1O.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DUjnthxD.js";import"./uniqBy-BOB5B76R.js";import"./iteratee-D419HqXa.js";import"./AnimatedItems-B3DzMe78.js";import"./useAnimationId-DN0POjqt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cs9OQ1Xh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./tooltipContext-CezEY4OY.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getZIndexFromUnknown-CZumgnna.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-gRJfRcSR.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
