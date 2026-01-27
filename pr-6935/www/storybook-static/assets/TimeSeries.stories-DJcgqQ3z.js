import{e}from"./iframe-IlsB_rJq.js";import{X as s}from"./XAxis-BQuXAPTr.js";import{R as y}from"./arrayEqualityCheck-DRku3AZG.js";import{C as g}from"./ComposedChart-CyYwEyzP.js";import{L as x}from"./Line-CDm7gB2t.js";import{R as S}from"./RechartsHookInspector-HlZdM34s.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-DKjWCzWL.js";import{T as O}from"./Tooltip-2VtOJr--.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./CartesianAxis-SxT37-Os.js";import"./Layer-vBbFq665.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./Label-DZIMKlIj.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-9CrWluzk.js";import"./zIndexSlice-CKbt9tj5.js";import"./types-tqXwELcn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DcodrmVZ.js";import"./CategoricalChart-Bh-A6rTf.js";import"./RechartsWrapper-C3UkR7qf.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./ReactUtils-Pssbr3N2.js";import"./ActivePoints-Cr8soWVC.js";import"./Dot-BxXnrLYt.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./ErrorBarContext-XG0EPrx-.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./useAnimationId-Bms0uFs7.js";import"./getRadiusAndStrokeWidthFromDot-De11iLXV.js";import"./ActiveShapeUtils-Cv3IrxQk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxgUhFQy.js";import"./Trapezoid-CcrDALRL.js";import"./Sector-D5hYxMFM.js";import"./Symbols-DKmDvY-C.js";import"./Curve-BktJTjWe.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";import"./useElementOffset-CdX39lF8.js";import"./iteratee-wUxeLBjz.js";import"./Cross-B8GjIZrQ.js";const Ht={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,It as __namedExportsOrder,Ht as default};
