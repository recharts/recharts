import{e}from"./iframe-Cag7wSRv.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-DXJVCfkD.js";import{g as y}from"./arrayEqualityCheck-DIS5wzHQ.js";import{C as g}from"./ComposedChart-D8vYd6dl.js";import{L as x}from"./Line-DfIGhKaB.js";import{R as S}from"./RechartsHookInspector-BY5Jlwrh.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-e6S4jaCB.js";import{T as V}from"./Tooltip-CaZgP3kp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BO6A-dYS.js";import"./Layer-BKYLP7Ft.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./Label-C9zkgYEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmSAjehE.js";import"./zIndexSlice-D-tflLzN.js";import"./immer-284wn8VQ.js";import"./types-VwRdPpC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./Curve-DBPrYDrF.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CluPQFSi.js";import"./useAnimationId-DTrmZnPm.js";import"./string-yHBgcFlJ.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./ErrorBarContext-CXe2vi8A.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";import"./useElementOffset-e6GLcNBL.js";import"./uniqBy-Dt7fnwgv.js";import"./iteratee-Jm-FQi8d.js";import"./Cross-0JOGn5HY.js";import"./Rectangle-C4gj6xhs.js";import"./Sector-PQ9ghs0A.js";const _t={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,_t as default};
