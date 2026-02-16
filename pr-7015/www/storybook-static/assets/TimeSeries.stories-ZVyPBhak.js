import{e}from"./iframe-BI7oaA_G.js";import{X as s}from"./XAxis-CapxM4jv.js";import{R as y}from"./arrayEqualityCheck-CqFOZzs4.js";import{C as g}from"./ComposedChart-Bmljd1qJ.js";import{L as x}from"./Line-CisjuVcw.js";import{R as S}from"./RechartsHookInspector-B5lL4wmf.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-CGdfGHmv.js";import{T as O}from"./Tooltip-87W6LZYY.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmsjXKM6.js";import"./CartesianAxis-maHjO968.js";import"./Layer-_hLoKUUt.js";import"./Text-uzPlC_zS.js";import"./DOMUtils-D_254HoM.js";import"./Label-CW-OXdCr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ow9Mnhy6.js";import"./zIndexSlice-BJBRf06a.js";import"./types-BMyhg35s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C7y0xKdM.js";import"./hooks-BYYSr3I0.js";import"./RechartsWrapper-o4Mh8MkL.js";import"./CartesianChart-C-ZN2oGk.js";import"./chartDataContext-Bvker2sK.js";import"./CategoricalChart-Cgi21fgg.js";import"./ReactUtils-CElkG0RD.js";import"./ActivePoints-BR-wKGMx.js";import"./Dot-DtG9WkmN.js";import"./RegisterGraphicalItemId-D0nTrYTJ.js";import"./ErrorBarContext-Cfw2K8JX.js";import"./GraphicalItemClipPath-BcJbyhsI.js";import"./SetGraphicalItem-C9Na75Z3.js";import"./useAnimationId-DTs7L-5Q.js";import"./getRadiusAndStrokeWidthFromDot-DsJx8dx0.js";import"./ActiveShapeUtils-BLY2D3T7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ICwvq_9q.js";import"./Trapezoid-DmJQSZ1N.js";import"./Sector-CLQqFD3N.js";import"./Symbols-BV4zxwPS.js";import"./Curve-DhRTsi0L.js";import"./index-DJbyc3-8.js";import"./ChartSizeDimensions-DfSqX2vT.js";import"./OffsetShower-DIooMjVh.js";import"./PlotAreaShower-9a9xIQCa.js";import"./useElementOffset-Cs90PYbu.js";import"./iteratee-Bl6YWlFc.js";import"./Cross-HJItOYqe.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Wt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Wt as __namedExportsOrder,Lt as default};
