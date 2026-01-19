import{e}from"./iframe-CpNu1JlZ.js";import{X as s}from"./XAxis-4Sxw4UkR.js";import{R as y}from"./arrayEqualityCheck-BJH8Jf6v.js";import{C as g}from"./ComposedChart-BI4mwn7j.js";import{L as x}from"./Line-D-KlkcmY.js";import{R as S}from"./RechartsHookInspector-BmpKM6Nz.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-BBvb1V6K.js";import{T as O}from"./Tooltip-BDYCU4M-.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./CartesianAxis-DHgD0c-6.js";import"./Layer-CgGUTlVA.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./Label-BZ3pAw6v.js";import"./PolarUtils-D3v-RsLH.js";import"./ZIndexLayer-BhjXIlXu.js";import"./zIndexSlice-DY-K2-IQ.js";import"./types-DLbIt3jn.js";import"./hooks-C6Ia6Lfs.js";import"./CategoricalChart-BHgD9gAO.js";import"./RechartsWrapper-0hOTWq_R.js";import"./CartesianChart-DJav-J6T.js";import"./chartDataContext-D9xDPkuR.js";import"./ReactUtils-DkvyTuz_.js";import"./ActivePoints-DW3qXorP.js";import"./Dot-DHMhFj_F.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./ErrorBarContext-CPEIMkdr.js";import"./GraphicalItemClipPath-CxPnAcc7.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./useAnimationId-B5QsM2o0.js";import"./getRadiusAndStrokeWidthFromDot-CA6t2h0u.js";import"./ActiveShapeUtils-DXbdTG-x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpK3ty__.js";import"./Trapezoid-DLjeAkOF.js";import"./Sector-CFrzjDGx.js";import"./Symbols-BLQ2T1a8.js";import"./Curve-BgSSBByK.js";import"./index-BjecE5DL.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";import"./useElementOffset-CTfVH7U4.js";import"./iteratee-CHvlDlHn.js";import"./Cross-DZ0IO1Uo.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
