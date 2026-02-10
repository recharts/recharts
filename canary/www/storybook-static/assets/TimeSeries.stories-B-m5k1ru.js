import{e}from"./iframe-BXZsi3ZJ.js";import{X as s}from"./XAxis-vWhvLlJA.js";import{R as y}from"./arrayEqualityCheck-Cr28DIq7.js";import{C as g}from"./ComposedChart-A4rsHRl-.js";import{L as x}from"./Line-1az24r_p.js";import{R as S}from"./RechartsHookInspector-BcsNAcT5.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-DViO6aT3.js";import{T as O}from"./Tooltip-CXAzYhU1.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKwhIINC.js";import"./CartesianAxis-D3TuOOex.js";import"./Layer-CHngc-aq.js";import"./Text-BiWmZivS.js";import"./DOMUtils-C3G08RNL.js";import"./Label-BOPAlXUc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BN0SI8Of.js";import"./zIndexSlice-47t4gEct.js";import"./types-5-uOdbL9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CeRNCNPw.js";import"./RechartsWrapper-DbqalEnK.js";import"./CartesianChart-34kvrnIo.js";import"./chartDataContext-RNK-qzkr.js";import"./CategoricalChart-Cfh0DMKR.js";import"./ReactUtils-Cp6NqBbj.js";import"./ActivePoints-C2rwBq_Q.js";import"./Dot-BSyucR2X.js";import"./RegisterGraphicalItemId-BjUtGevU.js";import"./ErrorBarContext-a8MR5IC4.js";import"./GraphicalItemClipPath-BTERSkFA.js";import"./SetGraphicalItem-C1CwePg9.js";import"./useAnimationId-DdIT7cjj.js";import"./getRadiusAndStrokeWidthFromDot-h-LXgdKb.js";import"./ActiveShapeUtils-LYXTR8UQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C086hGgA.js";import"./Trapezoid-CgIXwzIx.js";import"./Sector-CiJ5MIJx.js";import"./Symbols-CywLz0nT.js";import"./Curve-CD_JBQwm.js";import"./index-Chn5vrwc.js";import"./ChartSizeDimensions-DJrZeKfe.js";import"./OffsetShower-DmQZJejv.js";import"./PlotAreaShower-CTSmLut9.js";import"./useElementOffset-CCimOZj2.js";import"./iteratee-pBQ1AHnD.js";import"./Cross-D7YmrLLh.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
