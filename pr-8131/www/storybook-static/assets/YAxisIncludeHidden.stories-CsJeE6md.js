import{r as f,R as e}from"./iframe-OYo09Kjn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B9J5xeR5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C0otV0Tq.js";import{C as k}from"./ComposedChart-O8l7FYsv.js";import{X as K}from"./XAxis-C4iNCAUT.js";import{L as v}from"./Legend-BAHT8kds.js";import{B as a}from"./Bar-gTTOrVYU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BLd_HfLL.js";import"./Text-Dl7WOzrI.js";import"./resolveDefaultProps-BV2Pd4xr.js";import"./DOMUtils-VDBzCn3R.js";import"./ZIndexLayer-fjsdvpte.js";import"./index-B1YAqRON.js";import"./index-jR8-nOeq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-h48S2J0z.js";import"./throttle-2ukkMEiH.js";import"./axisSelectors-DwbFlqn_.js";import"./d3-scale-CkZT7Yna.js";import"./CartesianAxis-Ce7EujIW.js";import"./Layer-BKQ7Cq1e.js";import"./types-CzskQIcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dj299CQx.js";import"./index-D6UCrPx5.js";import"./index-OFmsSHfS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DDeqrE6g.js";import"./index-C9mjTPMA.js";import"./fillDefinitions-DyAhyaHy.js";import"./CartesianChart-CU1owHvq.js";import"./ZIndexPortal-THJMy4l1.js";import"./CategoricalChart-reFCYYlz.js";import"./Symbols-DShbzJAN.js";import"./symbol-CmMsv7zq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DmtR-dee.js";import"./uniqBy-CaC20Hzh.js";import"./iteratee-B2qJ-Z7i.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D8hIzv9X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Br8BuzQ0.js";import"./useAnimationId-Bfw_1I20.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DsFWfn7B.js";import"./tooltipContext-CYMqnwB3.js";import"./dataEntryStyles-CwKCb_eK.js";import"./ErrorBarContext-Dht0z-3r.js";import"./activeStyles-By7c-_I7.js";import"./SetGraphicalItem-C2cjU4L3.js";import"./getZIndexFromUnknown-CsgPkce_.js";import"./useEffectiveDataKey-BkqAzi9W.js";import"./omit-BovP7YlK.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
